import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ReactGA from "react-ga4";

import { Toaster } from "react-hot-toast";

import FullPageSpinner from "./ui/FullPageSpinner.jsx";

import PageBgContainer from "./pages/PageBgContainer.jsx";
import PageContainer from "./pages/PageContainer.jsx";
import CheckAuth from "./ui/CheckAuth.jsx";
import VersionCheck from "./ui/VersionCheck.jsx";

const HomePage = lazy(() => import("./pages/HomePage.jsx"));
const LoginPage = lazy(() => import("./pages/LoginPage.jsx"));
const GetEmailPage = lazy(() => import("./pages/GetEmailPage.jsx"));
const VerifyEmailPage = lazy(() => import("./pages/VerifyEmailPage.jsx"));
const GetNamePage = lazy(() => import("./pages/GetNamePage.jsx"));
const GetPasswordPage = lazy(() => import("./pages/GetPasswordPage.jsx"));
const AboutUsPage = lazy(() => import("./pages/AboutUsPage.jsx"));
const ContactUsPage = lazy(() => import("./pages/ContactUsPage.jsx"));
const SupporterPage = lazy(() => import("./pages/SupportersPage.jsx"));
const WordsListPage = lazy(() => import("./pages/WordsListPage.jsx"));
const WordDetailPage = lazy(() => import("./pages/WordDetailPage.jsx"));
const SuggestedWordFormPage = lazy(() => import("./pages/SuggestedWordFormPage.jsx"));
const PageNotFound = lazy(() => import("./pages/PageNotFound.jsx"));


function usePageTracking() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({hitType: "pageview", page: location.pathname + location.search});
  }, [location]);
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 60 * 1000, // staleTime: 0,
    },
  },
});

function App() {
  usePageTracking();

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false}></ReactQueryDevtools>
      <Suspense fallback={<FullPageSpinner/>}>
        <BrowserRouter future={{v7_startTransition: true, v7_relativeSplatPath: true}}>
          <Routes>
            <Route element={<PageBgContainer/>}>
              <Route path="/" exact element={<CheckAuth><HomePage/></CheckAuth>}/>
              <Route path="/login" exact element={<LoginPage/>}/>
              <Route path="/get-email" exact element={<GetEmailPage/>}/>
              <Route path="/verify-email" exact element={<VerifyEmailPage/>}/>
              <Route path="/get-name" exact element={<GetNamePage/>}/>
              <Route path="/get-password" exact element={<GetPasswordPage/>}/>
              <Route element={<CheckAuth><PageContainer/></CheckAuth>}>
                <Route path="/about-us" exact element={<AboutUsPage/>}/>
                <Route path="/contact-us" exact element={<ContactUsPage/>}/>
                <Route path="/supporters" exact element={<SupporterPage/>}/>
                <Route path="/words" exact element={<WordsListPage/>}/>
                <Route path="/words/suggestedword" element={<SuggestedWordFormPage/>}/>
                <Route path="/words/:wordSlug" element={<WordDetailPage/>}/>
                <Route path="*" element={<PageNotFound/>}/>
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </Suspense>
      <VersionCheck/>
      <Toaster position="top-center" gutter={12} containerStyle={{margin: "8px"}}
               toastOptions={{
                 success: {
                   duration: 3000,
                 }, error: {
                   duration: 5000,
                 }, style: {
                   fontFamily: "Vazirmatn, sans-serif",
                   fontSize: "16px",
                   maxWidth: "500px",
                   borderRadius: "2rem",
                   padding: "16px 24px", // backgroundColor: "#fff7ec",
                 },
               }}/>
    </QueryClientProvider>
  );
}

export default App;
