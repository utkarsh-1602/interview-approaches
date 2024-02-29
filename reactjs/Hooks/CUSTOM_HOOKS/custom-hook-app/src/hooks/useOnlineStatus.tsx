import { useEffect, useState } from 'react'

const useOnlineStatus = () => {

    const [isOnline, setIsOnline] = useState(true);

    useEffect(() => {

        function handleOffline(){
            setIsOnline(false)
        }

        function handleOnline(){
            setIsOnline(false)
        }

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        // here the cleanup function is used to remove the side effects when the component unmounts 
        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        }
    }, [])

  return isOnline;
}

export default useOnlineStatus

