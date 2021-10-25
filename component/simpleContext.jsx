import React, { createContext } from 'react'


const SimpleContext = createContext({
    token:{},
    user:{}
})

export default SimpleContext;