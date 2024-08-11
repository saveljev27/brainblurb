import axios from 'axios';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const { baseApiUrl } = publicRuntimeConfig?.api;

export default async function sendSignUpForm(formData) {
  const { email } = Object.fromEntries(formData);

  if (!email.trim()) {
    return { success: false, error: 'Email is required' };
  }

  // Already subscribed?
  try {
    const checkSubscription = await axios.get(
      `${baseApiUrl}/items/event_subscription`,
      {
        headers: {
          Authorization: 'Bearer ' + process.env.NEXT_PUBLIC_BRAINBLURB_API_KEY,
        },
      }
    );

    const existingEmail = checkSubscription?.data?.data?.find(
      (item) => item.email === email
    );
    if (existingEmail) {
      return { success: false, error: 'You are already subscribed' };
    }

    // If no post a new subscription
    const data = { email };

    const response = await axios.post(
      `${baseApiUrl}/items/event_subscription`,
      data
    );

    if (response.status >= 200 && response.status <= 299) {
      return { success: true };
    } else {
      return {
        success: false,
      };
    }
  } catch (error) {
    return { success: false };
  }
}
