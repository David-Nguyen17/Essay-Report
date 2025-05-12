import { persistor, store } from "@/redux/store";
import MainRoutes from "@/routers";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";

const queryClient = new QueryClient();
const App = () => {
  return (
    <HelmetProvider>
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <QueryClientProvider client={queryClient}>
              <MainRoutes />
              <ToastContainer />
            </QueryClientProvider>
          </PersistGate>
        </Provider>
      </ErrorBoundary>
    </HelmetProvider>
  );
};

export default App;
