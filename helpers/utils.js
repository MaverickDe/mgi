export const  useMediawQuery = (useMediaQuery)=>( {
     isMobileDevice: useMediaQuery({
        query: "(max-device-width: 480px)",
      }),
    
     isMobileDevicePlus: useMediaQuery({
        query: "(max-device-width: 550px)",
      }),
    
       isTabletDevice: useMediaQuery({
        query: "(max-device-width: 768px)",
      }),
       isTabletPlusDevice: useMediaQuery({
        query: "(max-device-width: 900px)",
      }),
  
       isLaptop : useMediaQuery({
        query: "(max-device-width: 1024px)",
    }),
    
     isDesktop :useMediaQuery({
        query: "(max-device-width: 1200px)",
      })
    
      , isBigScreen: useMediaQuery({
        query: "(max-device-width: 1201px )",
      })
})