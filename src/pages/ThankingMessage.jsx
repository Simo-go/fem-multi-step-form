import StepHeader from "../components/StepHeader";

function ThankingMessage() {
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <img src="./images/icon-thank-you.svg" alt="" />
      <StepHeader
        className="text-center"
        content="Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com."
      >
        Thank you!
      </StepHeader>
    </div>
  );
}

export default ThankingMessage;
