import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

export default function successPage(){
    return (
        <>
        <Navbar />
        <div className="bg-white w-full h-[90vh] flex justify-center items-center">
        <div className="bg-gray-100 h-max px-20 py-20 mt-32">
            <div className="p-6  md:mx-auto">
                <svg viewBox="0 0 24 24" className="text-green-600 w-16 h-16 mx-auto my-6">
                    <path fill="currentColor"
                        d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z">
                    </path>
                </svg>
                <div className="text-center">
                    <h3 className="md:text-4xl text-3xl text-gray-900 font-semibold text-center">Payment Done!</h3>
                    <p className="text-gray-600 text-xl my-2">Thank you for completing your secure online payment.</p>
                    <p className="text-lg"> Have a great day!  </p>
                    <div className="py-10 text-center">
                        <a href="/" className="px-12 mt-3 bg-indigo-600 hover:bg-indigo-500 text-white text-lg font-semibold py-6">
                            GO BACK 
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <Footer />
        </>
    )
}