import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
       <div>
        <a href="#">Bot-Ui</a>
        {/* <span className="ml-1">&copy; 2021 Tracom</span> */}
      </div>
      {/* <div className="mfs-auto">
        <span className="mr-1">Powered by</span>
        <a href="#">Miliki</a>
      </div> */}
    </CFooter>
  )
}

export default React.memo(TheFooter)
