
import Components from '../components'

function Wrapper({ children }) {

    const { Header, Footer } = Components

    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default Wrapper