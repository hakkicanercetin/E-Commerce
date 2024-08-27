import Inputs from "./Inputs"

const Contact = () => {
  return (
    <>
        <div className="min-[1700px]:px-[360px] px-[225px] max-[1368px]:px-[175px] max-[1200px]:px-[150px] max-[992px]:px-[32px] max-[767px]:px-4">
            <div className='py-10 flex justify-center 2xl:px-[250px]'>
                <div className="text-center">
                    <div>
                        <p className="text-[46px] font-bold leading-[48px] mt-[60px]">Bize Ulaşın</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <Inputs></Inputs>
                    </div>
                    <div className="py-[30px] md:px-[75px]">
                        <p>*Aynı gün kargo hafta içi 16:00, Cumartesi ise 11:00' a kadar verilen siparişler icin geçerlidir. Siparişler kargoya verilince e-posta ve sms ile bilgilendirme yapılır.</p>
                    </div>
                    <div>
                        <p className="pb-[30px]">Telefon ile 0850 303 29 89 numarasını arayarak da bizlere sesli mesaj bırakabilirsiniz . Sesli mesajlarınıza hafta içi saat 09:00-17:00 arasında dönüş sağlanmaktadır.</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Contact