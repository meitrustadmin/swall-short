







// const MyComponent: FunctionComponent<Props> = (props) => {}

import { FunctionComponent } from "react";

type Props = {
    text: string
}

const Loading: FunctionComponent<Props> = ({ text }) => {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-80 backdrop-blur-sm z-50">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="w-16 h-16 border-4 border-t-sky border-gray-200 rounded-full animate-spin"></div>
          <div className="text-base font-default text-sky">{text}</div>
        </div>
      </div>
    );
  }

export default Loading;