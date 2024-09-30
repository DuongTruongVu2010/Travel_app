import { PEOPLE_URL } from "@/constants";
import Image from "next/image";

interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;

}

const CampSite = ({backgroundImage, title, subtitle, peopleJoined}: CampProps) => {
  return (
    <div className={`h-full w-full lg:min-w-[900px] ${backgroundImage} bg-cover bg-no-repeat xs:rounded-xl sm:rounded-xl lg:rounded-5xl 2xl:rounded-5xl sm:min-w-[600px] xs:min-w-80` }>
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10 ">
        <div className="flexCenter gap-4">
          <div className="rounded-full bg-green-50 p-4">
            <Image className="" alt="map" src="/folded-map.svg" width={28} height={28}/>
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="bold-18 text-white">{title}</h4>
            <p className="regular-14 text-white">{subtitle}</p>
          </div>
        </div>
        <div className="flexCenter gap-6">
          <span className="flex -space-x-4 overflow-hidden">
            {PEOPLE_URL.map((url) => (
              <Image 
                className="inline-block h-10 w-10 rounded-full"
                alt="person"
                src={url}
                key={url}
                width={52}
                height={52}
              />
            ))}
          </span>
          <p className="bold-16 md:bold-20 text-white">{peopleJoined}</p>
        </div>
      </div>
    </div>
  )
}

function Camp() {
  return (
    <section className='padding-container max-container relative flex flex-col py-10 lg:mb-10 lg:py-10 xl:mb-5'>
      <div className='hide-scrollbar flex xs:h-64 sm:h-80 w-full items-start justify-start gap-8 overflow-x-auto lg:h-[450px] xl:h-[540px]'>
        <CampSite
          backgroundImage="bg-bg-img-1"
          title="Langbiang Camp"
          subtitle="Đồi, cây thông"
          peopleJoined="145+ Đã tham gia"

        />
        <CampSite 
          backgroundImage="bg-bg-img-2"
          title="Langbiang Camp"
          subtitle="Cấm trại cảnh hồ "
          peopleJoined="59+ Đã tham gia"
        
        />
      </div>
      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-green-50 p-8 lg:max-w-[340px] xl:max-w-[520px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
            <strong>Cảm thấy lạc lõng</strong> Và Không Biết Đường?
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
          Bắt đầu từ sự lo lắng của người leo núi khi đến địa điểm leo núi mới nên khả năng bị lạc là rất lớn. Đó là lý do tại sao chúng tôi ở đây dành cho những ai muốn bắt đầu một cuộc phiêu lưu
          </p>
          <Image 
            src="/quote.svg"
            alt="camp-2"
            width={186}
            height={219}
            className="camp-quote"
          />
        </div>
      </div>
    </section>
  )
}

export default Camp