const CompanyForm = () => {
  return (
    <div
      className="flex justify-center items-center h-screen"
      style={{ backgroundColor: "#F3F4F6" }}
    >
      <div className=" h-[45vw] w-[45vw] shadow-xl rounded-lg">
        <h1 className="text-3xl font-serif text-center m-3">
          Onboarding Login Form
        </h1>
        <form className="m-10 text-sm" action="">
          {/* need to ask for * mark in labbel also asked them about the spacing to add spacing between 
          elements i have to add div then it adds space is there any other way  */}
          <div className="mb-3">
            <label htmlFor="">Company Name: </label>
            <input
              className="border-black border rounded-sm w-full h-8"
              type="text"
              placeholder=" Ex:- ABC Pvt Ltd"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="">Website URL: </label>
            <input
              className="border-black border rounded-sm w-full h-8"
              type="url"
              placeholder=" Ex:- www.abzcompany.com"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="">Email Id: </label>
            <input
              className="border-black border rounded-sm w-full h-8"
              type="email"
              placeholder=" Ex:- abc@company.com"
            />
          </div>

          <div className="mb-3 grid grid-cols-2">
            <label htmlFor="">Industry Type: </label>
            <label className="ml-2" htmlFor="">
              Company Size:
            </label>
            <select className="border-black border rounded-sm">
              <option value="IT Services">IT Services</option>
              <option value="Finance">Finance</option>
              <option value="Healthcare">Healthcare</option>
            </select>
            <input
              className="border-black border rounded-sm ml-2 h-8"
              type="number"
              placeholder=" Ex:- ABC Pvt Ltd"
            />
          </div>

          <div className="mb-3 grid grid-cols-2">
            <label htmlFor=""> Verified Date:</label>
            <label className="ml-2" htmlFor="">
              Headquater:
            </label>
            <input
              className="border-black border rounded-sm h-8"
              type="date"
              placeholder=" Ex:- ABC Pvt Ltd"
            />
            <select className="border-black border rounded-sm ml-2">
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="USA">China</option>
            </select>
          </div>

          <div className="mb-3 flex flex-col">
            <label htmlFor="">Company Description: </label>
            <textarea
              cols={5}
              rows={3}
              className="border-black border rounded-sm"
              name="description"
            ></textarea>
          </div>

          <div className="mb-3 flex flex-col">
            <label htmlFor="">Company Address: </label>
            <textarea
              cols={5}
              rows={3}
              className="border-black border rounded-sm"
              name="description"
            ></textarea>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CompanyForm;
