// import { ToastContainer, toast } from 'react-toastify';

// export const getData = ()=>{
// let BooikngData = [];

// const storedBookingData  = localStorage('BookingData') 
// if (storedBookingData) {
//    BooikngData = JSON.parse(storedBookingData)
//   }
//   return BooikngData;

// }

// export const setData = (BookingInfo)=>{
//     let BooikngData = getData()
//     const isExist = BooikngData.find(b => b.id === BookingInfo.id)
//     if (isExist) return toast.error('Already Added!')
        
  
//    BooikngData.push(BookingInfo)
//     localStorage.setItem('BookingData', JSON.stringify(BooikngData))
//     toast.success('Phone added Successfully!')

    
//   }
  
//   export const removeFavorite = id => {
//     let Booking = getFavorites()
//     const remaining = favorites.filter(b => b.id !== id)
//     localStorage.setItem('favorites', JSON.stringify(remaining))
//     toast.success('Phone Removed from Favorite List!')
//   }

