interface Query {
  id: string;
}

const Mail = ({ params }: { params: Query }) => {
  return (
    <section className="h-full w-full flex justify-center items-center">
      <div className="bg-white w-4/5 p-5">
        <h1 className="text-3xl font-semibold mb-5">
          Send mail to {params.id == "null" ? "user" : params.id}
        </h1>

        {params.id == "null" && (
          <div className="mb-5">
            <label htmlFor="amount" className="text-sm">
              Mail to
            </label>
            <input
              type="text"
              name="wallet"
              placeholder="User's Email Address..."
              className="p-2 mt-1 border outline-none border-ash border-opacity-50 text-sm bg-transparent w-full"
            />
          </div>
        )}

        <div className="mb-5">
          <label htmlFor="amount" className="text-sm">
            Subject
          </label>
          <input
            type="text"
            name="wallet"
            className="p-2 mt-1 border outline-none border-ash border-opacity-50 text-sm bg-transparent w-full"
          />
        </div>
        <div className="mb-5">
          <label htmlFor="amount" className="text-sm">
            Message
          </label>
          <textarea
            name="message"
            className="p-2 mt-1 border outline-none border-ash border-opacity-50 text-sm bg-transparent w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Mail;
