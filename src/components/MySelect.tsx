import {
  NativeSelectField,
  NativeSelectRoot,
} from "@/components/ui/native-select";

interface Props {
  list: { label: string; value: number | string }[];
}

const MySelect = ({ list }: Props) => {
  return (
    <NativeSelectRoot  size="md" width="240px">
      <NativeSelectField borderWidth={1} borderColor={"gray.500"} bgColor={"var(--card-color)"} rounded={"xl"} placeholder="Select Platform">
        {list.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </NativeSelectField>
    </NativeSelectRoot>
  );
};

export default MySelect;
