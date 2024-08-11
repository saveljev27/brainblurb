import axios from 'axios';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const { baseApiUrl } = publicRuntimeConfig?.api;

export default async function sendMessageForm(formData) {
  const { name, email, message } = Object.fromEntries(formData);

  if (!name.trim() || !email.trim() || !message.trim()) {
    return { success: false, error: 'All fields are required' };
  }

  const data = {
    name,
    email,
    message,
  };

  try {
    const response = await axios.post(`${baseApiUrl}/items/contact`, data);

    if (response.status >= 200 && response.status <= 299) {
      return { success: true };
    } else {
      return { success: false };
    }
  } catch (error) {
    return { success: false };
  }
}
