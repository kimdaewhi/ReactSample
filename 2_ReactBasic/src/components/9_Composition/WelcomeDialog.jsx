import React from 'react'
import CustomDialog from './CustomDialog'

export default function WelcomeDialog() {
    // return (
    //     <Dialog>
    //         <h1>Welcome</h1>
    //         <h5>Thank you!!</h5>
    //     </Dialog>
    // )

        return (
            <CustomDialog title={/*"Welcome"*/<button>Welcome</button>} description="Thanks" />
        )
}
