import { useQuery, useMutation } from "@tanstack/react-query";
import {
  CreateUser,
  UpdateUser,
  DeleteUser,
  ReadUser,
} from "../services/api/endpoints";

export function useCreateUser({ onSuccess = () => {}, onError = () => {} }) {
  return useMutation({ mutationFn: CreateUser, onSuccess, onError });
}

export function useReadUser({ onSuccess = () => {}, onError = () => {} }) {
  return useQuery({
    queryKey: ["usuarios"],
    queryFn: ReadUser,
    onSuccess,
    onError,
  });
}

export function useUpdateUser({ onSuccess = () => {}, onError = () => {} }) {
  return useMutation({ mutationFn: UpdateUser, onSuccess, onError });
}

export function useDeleteUser({ onSuccess = () => {}, onError = () => {} }) {
  return useMutation({ mutationFn: DeleteUser, onSuccess, onError });
}
