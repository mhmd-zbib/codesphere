import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface FormFieldWrapperProps {
  control: any;
  label: string;
  name: string;
  placeholder: string;
}

const FormFieldWrapper = ({
  control,
  name,
  label,
  placeholder,
}: FormFieldWrapperProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <Input {...field} placeholder={placeholder} />
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormFieldWrapper;
