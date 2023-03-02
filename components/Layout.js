import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
    return (
        <div className="content container mx-auto px-8 xl:px-20 max-w-screen-2xl min-h-screen">
            <Header />
            <div className="min-h-[60vh]">{children}</div>
            <Footer/>
        </div>
    );
};

export default Layout;
