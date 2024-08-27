const MailInput = () => {
  return (
    <div className="flex flex-col">
      <label htmlFor="mail">*Email</label>
      <input
        type="email"
        id="mail"
        placeholder="iletisim@onlyjs.com"
        className="border-[1px] border-solid border-[#e5e5e5] bg-[#f7f7f7] p-4 rounded"
      />
    </div>
  );
};

export default MailInput;
