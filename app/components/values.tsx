import Image from "next/image";
import inclusivity from "../../public/images/inclusivity.png";
import customer from "../../public/images/customer.png";
export default function Values() {
  return (
    <div>
      <span className="flex text-5xl pt-5">Our Values</span>
      <div className="flex flex-wrap">
        <div className="flex flex-col w-1/3 mt-10">
          <Image
            src="/images/integrity.png"
            width={70}
            height={70}
            alt="Integrity"
            className="py-3"
          />
          <span className="text-xl py-3 font-semibold">Integrity</span>
          <span>Being Honest, Ethical and Doing What's Right For Business</span>
        </div>

        <div className="flex flex-col w-1/3 mt-10">
          <Image
            src="/images/leadership.png"
            width={70}
            height={70}
            alt="leadership"
            className="py-3"
          />
          <span className="text-xl py-3 font-semibold">Leadership</span>
          <span>Follow the legacy of Building future leaders</span>
        </div>

        <div className="flex flex-col w-1/3 mt-10">
          <Image
            src="/images/ownership.png"
            width={70}
            height={70}
            alt="ownership"
            className="py-3"
          />
          <span className="text-xl py-3 font-semibold">
            Ownership & Originality
          </span>
          <span>Accountability and originality in everything we do</span>
        </div>

        <div className="flex flex-col w-1/3 mt-10">
          <Image
            src={inclusivity}
            width={70}
            height={70}
            alt="inclusivity"
            className="py-3"
          />
          <span className="text-xl py-3 font-semibold">Inclusivity</span>
          <span>
            Driving an organizational culture which is inclusive for all and
            where every employee feels valued
          </span>
        </div>

        <div className="flex flex-col w-1/3 mt-10">
          <Image
            src={customer}
            width={70}
            height={70}
            alt="CustomerCentric"
            className="py-3"
          />
          <span className="text-xl py-3 font-semibold">Customer Centric</span>
          <span>Keeping our customers at the center of our business</span>
        </div>
      </div>
    </div>
  );
}
