import { toast, ToastOptions } from 'react-toastify'

const options: ToastOptions<{}> = {
  position: 'top-center',
  autoClose: 3000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
  progress: undefined,
  theme: 'light',
}

export const toastDefaults = (msg: string) => toast(msg, options)

export const toastSuccess = (msg: string) => toast.success(msg, options)

export const toastError = (msg: string) => toast.error(msg, options)

export const toastWarning = (msg: string) => toast.warning(msg, options)

export const toastInfo = (msg: string) => toast.info(msg, options)
