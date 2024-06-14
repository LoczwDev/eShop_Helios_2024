import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./components/MainLayout";
import { HomePage } from "./pages/home/HomePage";
import { ProductDetailPage } from "./pages/productDetails/ProductDetailPage";
import { ProductFilterPage } from "./pages/productFilter/ProductFilterPage";
import { NewsPage } from "./pages/news/NewsPage";
import { ContactPage } from "./pages/contact/ContactPage";
import { PolicyPage } from "./pages/policy/PolicyPage";
import { SupportChoseSize } from "./pages/suportChoseSize/SupportChoseSize";
import { NewsDetailsPage } from "./pages/news/newsDetails/NewsDetailsPage";
import { LoginPage } from "./pages/login/LoginPage";
import { RegisterPage } from "./pages/register/RegisterPage";
import { ProfilePage } from "./pages/profile/ProfilePage";
import { CartPage } from "./pages/cart/CartPage";
import { SearchPage } from "./pages/search/SearchPage";
import { PaymentSuccess } from "./pages/payments/status/PaymentSuccess";
import { OrdersPage } from "./pages/orders/OrdersPage";
import { FavoritePage } from "./pages/news/favorite/FavoritePage";
import { NotYetPage } from "./pages/notyet/NotYetPage";

export default function App() {
  return (
    <Routes>
      <Route index path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/products/:productId" element={<ProductDetailPage />} />
      <Route path="/products" element={<ProductFilterPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/news" element={<NewsPage />} />
      <Route path="/favorite" element={<FavoritePage />} />
      <Route path="/contacts" element={<ContactPage />} />
      <Route path="/policy" element={<PolicyPage />} />
      <Route path="/supportSize" element={<SupportChoseSize />} />
      <Route path="/news/:newsId" element={<NewsDetailsPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/orders" element={<OrdersPage />} />
      <Route path="/success" element={<PaymentSuccess />} />
      <Route path="/addresShop" element={<NotYetPage />} />
    </Routes>
  );
}
