const Footer = () => { 
    return (
        <footer className="w-full py-6 bg-gray-900/50 backdrop-blur-sm text-gray-400 mt-auto border-t border-gray-800/50">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> 
                    <div>
                        <h3 className="text-lg font-bold text-white mb-2">About KAGE</h3>
                        <p className="text-xs leading-relaxed opacity-70">
                            KAGE site n taniig dark webd hotloh bogood... hol baigarai.
                        </p>
                    </div>
                    <div id="contact">
                        <h3 className="text-lg font-bold text-white mb-2">Contact</h3>
                        <p className="text-xs">Address: BOGDIIN MUZEIN ARD</p>
                        <p className="text-xs">Email: EdwardSnowden666@gmail.com</p>
                    </div>
                </div>

                <hr className="my-4 border-gray-800" /> 

                <div className="flex flex-col md:flex-row justify-between items-center gap-2">
                    <p className="text-[10px] tracking-tight">
                        © {new Date().getFullYear()} KAGE SITE N 100% XANAAK IIN OMC YUM 🫦 
                    </p>
                    <div className="flex gap-4 text-[10px] uppercase tracking-tighter">
                        <span className="hover:text-white cursor-pointer">Twitter</span>
                        <span className="hover:text-white cursor-pointer">Discord</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer