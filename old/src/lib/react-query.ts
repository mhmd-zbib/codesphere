import {
  UseMutationOptions,
  DefaultOptions,
  QueryClient,
} from "@tanstack/react-query";

export const queryConfig = {
  queries: {
    refetchOnWindowFocus: false,
    retry: false,
    staleTime: 1000 * 60,
  },
} satisfies DefaultOptions;

export const queryClient = new QueryClient({ defaultOptions: queryConfig });

export type ApiFnReturn<FnType extends (...args: any) => Promise<any>> =
  Awaited<ReturnType<FnType>>;

export type QueryConfig<T extends (...args: any[]) => any> = Omit<
  ReturnType<T>,
  "queryKey" | "queryFn"
>;

export type MutationConfig<
  MutationType extends (...args: any) => Promise<any>
> = UseMutationOptions<
  ApiFnReturn<MutationType>,
  Error,
  Parameters<MutationType>[0]
>;
