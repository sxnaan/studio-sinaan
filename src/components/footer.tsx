import React from 'react'
import Link from 'next/link'

export default function Footer(){
    return (
        <div className='footer'>
            <div className="footer-copyright">
                <h3>© COPYRiGHT 2025 <Link href="/"><b>studio-sinaan</b></Link></h3>
                <h3>All Rights Reserved.</h3>
            </div>
        </div>
    )
}