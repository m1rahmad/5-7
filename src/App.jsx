import Nike1 from "./images/nike1.png"
import Nike2 from "./images/nike2.png"
import Nike3 from "./images/nike3.png"
import Nike4 from "./images/nike4.png"
import Nike5 from "./images/nike5.png"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {
  return (
    <div>
      <header className="header">
        <Navbar />
        <div className="header__content">
            <h1 className="header__title">NIKE</h1>
            <p className="header__text">Cool sneakers from <span>NIKE</span> for you</p>
        </div>
    </header>
    <main>
        <section className="product">
            <div className="container">
                <div className="product__left">
                    <img src={Nike1} alt="Nike React Infinity Run" className="product__left-image" />
                    <h2 className="product__left-title">Shoe Review: Nike React Infinity Run</h2>
                    <p className="product__left-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa</p>
                </div>
                <div className="product__right">
                    <div className="product__right-box">
                        <img src={Nike2} alt="Nike Air Max 270" className="product__right-image" />
                        <h2 className="product__right-title">Nike Air Max 270</h2>
                        <p className="product__right-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</p>
                    </div>
                    <div className="product__right-box">
                        <img src={Nike3} alt="Nike Tanjun" className="product__right-image" />
                        <h2 className="product__right-title">Nike Tanjun</h2>
                        <p className="product__right-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</p>
                    </div>
                    <div className="product__right-box">
                        <img src={Nike4} alt="Green Air Force" className="product__right-image" />
                        <h2 className="product__right-title">Green Air Force</h2>
                        <p className="product__right-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</p>
                    </div>
                    <div className="product__right-box">
                        <img src={Nike5} alt="Nike moon shoes" className="product__right-image" />
                        <h2 className="product__right-title">Nike moon shoes</h2>
                        <p className="product__right-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</p>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <Footer />
    </div>
  )
}

export default App