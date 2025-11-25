import { Header } from "../components/Header";
import { PeriodNavigator } from "../components/PeriodNavigator";
import { SleepForm } from "../components/SleepForm";
import { TimeLine } from "../components/TimeLine";

export default function Home() {
  return (
    <>
      <Header />
      <PeriodNavigator />
      <SleepForm />
      <TimeLine />
    </>
  );
}
