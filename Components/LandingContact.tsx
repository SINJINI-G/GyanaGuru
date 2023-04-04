import Image from "next/image";

const LandingContact = () => {
    return (
        <div className="w-full h-fit p-20 ">
           
            <div className="grid grid-cols-6  gap-8 w-full items-center">
          <div className="col-span-2 flex items-center">
            <Image
              className="m-auto -z-20 h-96 object-cover rounded-3xl  select-none"
              src="/images/contact.png"
              alt="Picture of the author"
              width={400}
              height={400}
            />
          </div>
          <div className="col-span-4 flex flex-col p-10 space-y-8 mx-auto z-10">
            <div className="w-3/4">
              <h2 className="text-3xl  font-archivo text-slate-900 ">{`Contact Us`}</h2>
              <h2 className=" font-archivo text-zinc-700 ">{`Have questions or feedback? We'd love to hear from you. Please fill out the form below and we'll get back to you as soon as possible.`}</h2>
              <input className="w-full bg-champange h-12 mt-4 p-4 outline-none focus:outline-orange-200 text-orange-800 font-archivo text-lg rounded-lg placeholder:text-orange-800/50 " type="text" placeholder="piyush@gmail.com" />
            </div>
            
            
          </div>
        </div>
            
        </div>
    );
}

export default LandingContact;