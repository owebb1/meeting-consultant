import { FC } from "react";
import { ChatGPTWebModel, UserConfig } from "~services/user-config";
import Select from "../Select";

interface Props {
  userConfig: UserConfig;
  updateConfigValue: (update: Partial<UserConfig>) => void;
}

const ChatGPWebSettings: FC<Props> = ({ userConfig, updateConfigValue }) => {
  return (
    <div className="flex flex-col gap-1">
      <p className="font-medium text-sm">{"Model"}</p>
      <div className="w-[250px] mb-1">
        <Select
          options={Object.entries(ChatGPTWebModel).map(([k, v]) => ({
            name: k,
            value: v,
          }))}
          value={userConfig.chatgptWebappModelName}
          onChange={(v) => updateConfigValue({ chatgptWebappModelName: v })}
        />
      </div>
      {userConfig.chatgptWebappModelName.startsWith("gpt-4") && (
        <p className="text-sm text-secondary-text">
          {"GPT-4 models require ChatGPT Plus"}
        </p>
      )}
      {userConfig.chatgptWebappModelName.includes("mobile") && (
        <p className="text-sm text-secondary-text">
          {"Model used by ChatGPT iOS app, potentially faster"}
        </p>
      )}
    </div>
  );
};

export default ChatGPWebSettings;
