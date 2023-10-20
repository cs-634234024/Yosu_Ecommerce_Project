// Notify To Navigate page or other 

import toast from 'react-hot-toast';

export const Notify = (type , message) => {
    if(type === "success"){
        toast.success(message)
    }else{
        toast.error(message)
    }
}