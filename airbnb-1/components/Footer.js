function Footer() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 px-32
        py-14 bg-gray-100 text-gray-500 gap-y-10">
            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold">ABOUT</h5>
                <p>How Airbnb works</p>
                <p>Newsroom</p>
                <p>Investors</p>
                <p>Airbnb Plus</p>
                <p>Airbnb Luxe</p>
            </div>

            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold">COMMUNITY</h5>
                <p>Accessibility</p>
                <p>This is not a real site</p>
                <p>Its a pretty good clone</p>
                <p>Referrals accepted</p>
                <p>Grassroots</p>
            </div>

            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold">HOST</h5>
                <p>Reactjs</p>
                <p>Presents</p>
                <p>Full stack development</p>
                <p>100s of views</p>
                <p>Join Now</p>
            </div>
        </div>
    )
}

export default Footer
