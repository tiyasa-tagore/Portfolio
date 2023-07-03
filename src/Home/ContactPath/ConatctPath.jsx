
const ConatctPath = () => {
    return (
        <div className="px-4 lg:px-32 bg-blue-950 space-x-5">
            <br />
            <br />
            
            <h3 className="text-3xl text-center py-12 text-white"> You Can Contact me </h3>
            <hr />

            <form>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-white">Name</span>
                    </label>
                    <input type="text" name="from_name" placeholder="Your Name" className="input input-bordered w-72 lg:w-[500px]" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-white">Email</span>
                    </label>
                    <input type="email" name="user_email" placeholder="abc@gmail.com" className="input input-bordered" required/>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-white">Message</span>
                    </label>
                    <textarea name="message" placeholder="Write your message.." className="textarea textarea-bordered textarea-lg w-full" required ></textarea>
                </div>
                <div className="mt-4 flex">
                    <button type="submit" className="btn btn-outline btn-warning w-[200px]">Send</button>
                   <br />
                   <br />
                   
                </div>
            </form>
        </div>
    );
};

export default ConatctPath;