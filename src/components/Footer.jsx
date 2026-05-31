import React from 'react'
import logo from "../assets/DigiToolsfooter.png"
import s1 from "../assets/Instagram.png"
import s2 from "../assets/Facebook.png"
import s3 from "../assets/Twitter.png"

const Footer = () => {
  return (
    <div className='flex pt-[70px]  justify-center items-center bg-[#101727FF] text-white'>
        <div className='w-[75%]'>
      <footer className="border-b-gray-700 border-b footer pb-[80px] sm:footer-horizontal  p-10">
        
  <aside>
    <img src={logo} alt="" />
    <p>
     Premium digital tools for creators, <br /> professionals, and businesses. Work smarter <br /> with our suite of powerful tools.
    </p>
  </aside>
  <nav>
    <h6 className="footer-title">Product</h6>
    <a className="link link-hover">Features</a>
    <a className="link link-hover">Pricing</a>
    <a className="link link-hover">Templates</a>
    <a className="link link-hover">Integrations</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About</a>
    <a className="link link-hover">Blog</a>
    <a className="link link-hover">Careers</a>
    <a className="link link-hover">Press</a>
  </nav>
  <nav>
    <h6 className="footer-title">Resources</h6>
    <a className="link link-hover">Documentation</a>
    <a className="link link-hover">Help Center</a>
    <a className="link link-hover">Community</a>
    <a className="link link-hover">Contact</a>
  </nav>
  <nav>
    <h6 className="footer-title">Social Links</h6>
    <div className="grid grid-flow-col gap-4">
 <a href=""><img src={s1} alt="" /></a>
 <a href=""><img src={s2} alt="" /></a>
 <a href=""><img src={s3} alt="" /></a>
    </div>
  </nav>

  
</footer>
<footer className="footer sm:footer-horizontal text-neutral-content items-center p-4">
  <aside className="grid-flow-col items-center">
  
    <p>&copy; 2026 Digitools. All rights reserved.</p>
  </aside>
  <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
 <a href="">Privacy Policy</a>
 <a href="">Terms of Service</a>
 <a href="">Cookies</a>
  </nav>
</footer></div>
    </div>
  )
}

export default Footer
