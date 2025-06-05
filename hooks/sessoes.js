import { useQuery, useMutation } from "@tanstack/react-query";
import {
  CreateSession,
  UpdateSession,
  DeleteSession,
  ReadSession,
} from "../services/api/endpoints";

export function useCreateSession({ onSuccess = () => {}, onError = () => {} }) {
  return useMutation({ mutationFn: CreateSession, onSuccess, onError });
}

export function useReadSession({ onSuccess = () => {}, onError = () => {} }) {
  return useQuery({
    queryKey: ["sessoes"],
    queryFn: ReadSession,
    onSuccess,
    onError,
  });
}

export function useUpdateSession({ onSuccess = () => {}, onError = () => {} }) {
  return useMutation({ mutationFn: UpdateSession, onSuccess, onError });
}

export function useDeleteSession({ onSuccess = () => {}, onError = () => {} }) {
  return useMutation({ mutationFn: DeleteSession, onSuccess, onError });
}
