import { Role } from "@/app/interfaces/roles-interfaces";
import { setterData } from "@/app/interfaces/setter-interfaces";
import { Input, Switch } from "@nextui-org/react";
import { useEffect, useState } from "react";

interface FieldsRolsProps {
  role?: Role;
  onChangeRole: (data: setterData) => void;
}
export default function FieldsRols(
  { role, onChangeRole }: FieldsRolsProps = {
    role: {} as Role,
    onChangeRole: () => {},
  }
) {
  const [fields, setFields] = useState<Role>({} as Role);
  const handleChangeRole = ({ clave, valor }: setterData) => {
    setFields({ ...fields, [clave]: valor });
    onChangeRole({ clave, valor });
  };

  useEffect(() => {
    if (role) {
      setFields(role || ({} as Role));
    }
  }, [role]);
  return (
    <div>
      <div className="w-full flex flex-col gap-4">
        <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
          <Input
            size="sm"
            type="text"
            label="Role"
            name="role"
            placeholder="Escriba un role..."
            defaultValue={role?.role}
            onChange={(e) => {
              const data: setterData = {
                clave: e.target.name,
                valor: e.target.value,
              };
              handleChangeRole(data);
            }}
          />
        </div>
      </div>
      <div className="w-full flex flex-col gap-4 mt-2">
        <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
          <Switch
            name="is_active"
            defaultSelected={role?.is_active}
            onChange={(e) => {
              const data: setterData = {
                clave: e.target.name,
                valor: e.target.checked,
              };

              handleChangeRole(data);
            }}
          />
        </div>
      </div>
    </div>
  );
}
