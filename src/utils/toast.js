import { toast as sonnerToast } from 'sonner';

export const toast = {
  success: (message) => sonnerToast.success(message),
  error: (message) => sonnerToast.error(message),
  info: (message) => sonnerToast.info(message),
  warning: (message) => sonnerToast.warning(message),
};

export const handleError = (error, defaultMessage = 'Something went wrong') => {
  const message = error?.response?.data?.message || error.message || defaultMessage;
  toast.error(message);
};
