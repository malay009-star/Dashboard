import React from 'react'
import { RegularWalkContext } from './systemcontext'

function RegularWalkProvider({children}) {

  const [regularWalks, setRegularWalks] = useState([]);

  return (
    <RegularWalkContext.Provider value={{regularWalks, setRegularWalks}}>
      {children}
    </RegularWalkContext.Provider>
  )
}

export default RegularWalkProvider
