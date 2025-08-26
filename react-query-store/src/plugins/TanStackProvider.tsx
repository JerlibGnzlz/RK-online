import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { PropsWithChildren } from "react"
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()


const TanStackProvider = ({ children }: PropsWithChildren) => {


    return (
        <QueryClientProvider client={queryClient}>
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    )
}

export default TanStackProvider
