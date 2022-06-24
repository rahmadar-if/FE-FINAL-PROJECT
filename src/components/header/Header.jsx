import "./header.css"

export default function Header() {
  return (
    <div className='header'>
        <div className="headerTitles">
            <span className="headerTitleSm"><h3>Share your Porto</h3></span>
            <span className="headerTitleLg"><i>Porto Share</i></span>
        </div>
        <img className="headerImg" src="https://images.pexels.com/photos/4050319/pexels-photo-4050319.jpeg?cs=srgb&dl=pexels-vlada-karpovich-4050319.jpg&fm=jpg" alt="" />
    </div>
  )
}
