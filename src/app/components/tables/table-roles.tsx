import ButtonDeleteRole from "../forms/roles/button-delete-role";
import ButtonEditRole from "../forms/roles/button-edit-role";

import { Role } from "@/app/interfaces/roles-interfaces";

interface TableRolesProps {
  onDeleted: (e: Role) => void;
  onUpdated: (e: Role) => void;
  roles: Role[];
}
const   TableRoles = ({ roles, onDeleted, onUpdated }: TableRolesProps) => {
  const handlerOnDeleted = async (rol: Role) => {
    onDeleted(rol);
  };

  const handlerOnUpdate = async (rol: Role) => {
    onUpdated(rol);
  };

  return (
    <div>
      <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
        <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400 sm:rounded-lg'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr className='text-center'>
              <th className='px-6 py-3'>ID</th>
              <th className='px-6 py-3'>Role</th>
              {/* <th className="px-6 py-3">Activo</th> */}
              <th className='px-6 py-3'>Config</th>
            </tr>
          </thead>
          <tbody className='bg-white border-b dark:bg-gray-900 dark:border-gray-700'>
            {Object.values(roles).map((role: any) => (
              <tr key={`role-${role.id}`}>
                <td className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                  {role.id}
                </td>
                <td className='px-6 py-4'> {role.role}</td>
                {/* <td className="px-6 py-4 text-center">
                  {role.is_active ? <span>Si</span> : <span>No</span>}
                </td> */}
                <td className='px-6 py-4'>
                  <div className='flex flex-row items-center justify-end'>
                    <ButtonDeleteRole
                      onDeleted={async (e) => {
                        alert("Eliminado");
                        await handlerOnDeleted(e);
                      }}
                      id={role.id}
                    />
                    <ButtonEditRole
                      onSaved={async (e) => {
                        await handlerOnUpdate(e);
                      }}
                      id={role.id}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default TableRoles;
