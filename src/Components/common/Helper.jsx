import Aware1 from "../../../public/images/webp/aware1.webp";
import Aware2 from "../../../public/images/webp/aware2.webp";
import Aware3 from "../../../public/images/webp/aware3.webp";
import Aware4 from "../../../public/images/webp/aware4.webp";
import check from "../../../public/images/webp/check.webp";
import check2 from "../../../public/images/webp/check.webp";
import Image from "next/image";
export const work = [
  {
    id: 1,
    img: Aware1,
    Heading:
      "Get high quality traffic to your website with organic and paid channels.",
    check: check,
    check2: (
      <Image
        width={28}
        height={28}
        className="me-2"
        src={check2}
        alt="check"
      ></Image>
    ),
    pera1: "Content & SEO Strategy",
    pera2: "Content Writing",
    pera3: "Content & SEO Strategy",
    pera4: "Content & SEO Strategy",
  },
  {
    id: 2,
    Heading: "Nurture leads into potential buyers with engagement campaigns.",
    img: Aware2,
    check: check,
    pera1: "Email Marketing Strategy",
    pera2: "Email Campaign Management",
    pera3: "Email Marketing Automation",
  },
  {
    id: 3,
    img: Aware3,
    Heading:
      "Convert potential buyers into customers with conversion campaigns.  ",
    check: check,
    pera1: "Landing Pages",
    pera2: "Marketing & Sales Funnels",
    pera3: "Conversion Rate Optimization",
  },
  {
    id: 4,
    img: Aware4,
    Heading: "Multiply revenue with referrals, and repeat business. ",
    check: check,
    pera1: "Chat Bots",
    pera2: "Referral & Affiliate Programs",
    pera3: "Paid Campaigns",
  },
];
export const Nextbtn = () => {
  return (
    <svg
      className="fill sm:w-[40px] w-[30px]"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="20" cy="20" r="19.5" stroke="#621C69" />
      <path
        d="M16 11L25 20L16 29"
        stroke="#621C69"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export const Backbtn = () => {
  return (
    <svg
      className="fill sm:w-[40px] w-[30px]"
      viewBox="0 0 41 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="20.5" cy="20" r="19.5" stroke="#621C69" />
      <path
        d="M24.5 29L15.5 20L24.5 11"
        stroke="#621C69"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
