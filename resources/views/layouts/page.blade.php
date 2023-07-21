<!DOCTYPE html>
<html class="no-touch" lang="vi" dir="ltr">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, minimum-scale=1.0, minimal-ui" />
    <meta name="theme-color" content="#FFF">
    @yield('title')
    <meta name="description" content="Chơi game miễn phí trên Gamekafe. Các game hai người chơi và game trang điểm hàng đầu. Tuy nhiên, game mô phỏng và game nấu ăn cũng rất phổ biến trong các người chơi. Gamekafe cũng hoạt động trên các thiết bị di động và có nhiều game cảm ứng cho điện thoại. Ghé thăm Gamekafe và gia nhập với cộng đồng người chơi ngay." />
    <meta name="keywords" content="chơi game miễn phí, chơi game trực tuyến, chơi game, gamekafe, gamekafe, kafe, fake, gameka, chơi game bóng đá, chơi game android, chơi game đua xe, chơi game zombie, chơi candy crush, chơi game đua tốc độ, chơi game casino, chơi poker, chơi game bắn nhau, chơi game thời trang, chơi game nữ giới, chơi game nấu ăn, chơi game phiêu lưu, chơi game câu cá, chơi game halloween, chơi game tình yêu, chơi game đố vui, chơi game thể thao, chơi game chiến tranh, chơi game bóng đá" />

    <meta property="og:title" content="Gamekafe -  Các trò chơi Trực tuyến Miễn phí tại Gamekafe">
    <meta property="og:type" content="website">
    <meta property="og:url" content="{{ env('APP_URL', 'gamekafe.com') }}">
    <meta property="og:image" content="{{ asset('images/black-logo-no-background.png') }}">
    <meta property="og:image:width" content="500">
    <meta property="og:image:height" content="500">
    <meta property="og:site_name" content="{{ env('APP_NAME', 'Gamekafe') }}">
    <meta property="og:description" content="Chơi game miễn phí trên Gamekafe. Các game hai người chơi và game trang điểm hàng đầu. Tuy nhiên, game mô phỏng và game nấu ăn cũng rất phổ biến trong các người chơi. Gamekafe cũng hoạt động trên các thiết bị di động và có nhiều game cảm ứng cho điện thoại. Ghé thăm Gamekafe và gia nhập với cộng đồng người chơi ngay.">
    <link rel="shortcut icon" type="image/x-icon" href="{{ asset('images/black-logo-no-background.png') }}" />
    <link rel="icon" sizes="192x192" href="{{ asset('images/black-logo-no-background.png') }}">
    <link rel="apple-touch-icon" href="{{ asset('images/black-logo-no-background.png') }}">
    <link rel="stylesheet" href="{{ asset('css/page/application.css') }}" />
    <link rel="stylesheet" href="{{ asset('css/page/latin.css') }}" />
    <link rel="stylesheet" href="{{ asset('css/user.css') }}" />
    <link href="http://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.3.0/css/font-awesome.css" rel="stylesheet" type='text/css'>
    @yield('css')
</head>

<body class="items index games-active">
    <nav class="navbar">
        <div class="container">
            <div class="y8-navbar-left">
                <div class="mobile-burger-menu">
                    <span class="burger-btn">
                        <img width="20" height="17" class="hamburger-icon" alt="Menu" src="{{ asset('assets/svg/hamburger-c3fe8358b513e219aa93bfd93e7b3d57991bc5741038ed7db7e71d347db0c6ae.svg') }}" />
                        <img width="16" height="16" class="hamburger-active-icon" alt="Menu" src="{{ asset('assets/svg/hamburger-active-03129c9dbc7bf62fc4cf3b24384c95eca4fafade56f0dfe54ce726cd8a718f2f.svg') }}" />
                    </span>
                </div>
                <div class="logo">
                    <a class="no-event" aria-label="logo" href="{{ route('home') }}">
                        <img width="50" height="50" alt="Gamekafe" src="{{ asset('images/black-logo-no-background.png') }}" />
                    </a>
                </div>
                <div class="mobile-search-user-container">
                    <div class="search-btn">
                        <img width="28" height="28" alt="Tìm kiếm trò chơi" src="{{ asset('assets/svg/search-9887eb433e2eff9a1fd0dda066ed7abf52897beecba0dce9ef152c2770dc9082.svg') }}" />
                    </div>
                    <div class="profile-btn">
                        <img class="profile-icon avatar" alt="Profile" src="{{ asset('assets/svg/profile-250b58e83592bb66fe437d6de217d30ee3dae674feee2ff962138996fdffde6e.svg') }}" />
                        <img class="arrow-up-icon" alt="Profile" src="{{ asset('assets/svg/arrow-up-bec5455682ee6239b995f18944808d8a0c75d7776798386efce255166669e5cf.svg') }}" />
                    </div>
                </div>
            </div>
            <form id="items-search-form" class="navbar-form" action="{{ route('search') }}" accept-charset="UTF-8" method="get">
                <input type="text" name="q" id="q" placeholder="Tìm kiếm trò chơi" class="form-control query fake-button" required="required" />
                <button type="submit" aria-label="Search">
                    <i class="y-icon y-icon--search"></i>
                </button>
                <span class="close-search-form"></span>
            </form>
            <div class="y8-navbar-right">
                <a style="text-decoration: none;" href="{{ route('new-games') }}">
                    <div class="fake-button js-top-menu two-lines btn-header-actions new-games">
                        {{ __('Game Mới') }}
                        <span class="sub-title">
                            {{ __('trong tháng') }}
                        </span>
                    </div>
                </a>

                <a style="text-decoration: none;" href="{{ route('best-games') }}">
                    <div class="fake-button js-top-menu two-lines btn-header-actions browse">
                        {{ __('Game Phổ Biến') }}
                        <span class="sub-title">{{ __('được quan tâm') }}
                        </span>
                        <div class="with-notification"></div>
                    </div>
                </a>

                @if (!auth()->user())
                <div class="waiting-idnet">
                    <div id="user_not_logged_in">
                        <a href="{{ route('register') }}">
                            <button type="button" class="fake-button fake-button-red idnet-fast-register-link">{{ __('Đăng ký') }}
                            </button>
                        </a>
                        <a href="{{route('login')}}">
                            <button type="button" class="fake-button idnet-fast-login-link">{{ __('Đăng nhập') }}
                            </button>
                        </a>
                    </div>
                </div>
                @else
                <div class="dropdown">
                    <button class="dropbtn" style="background-color: #f1f1f1; color: #666; font-size: 13px; font-weight: 700;"><i class="fa fa-user"></i>
                        {{ Auth::user()->name }}
                    </button>
                    <div class="dropdown-content">
                        <a href="{{ route('user.setting') }}">{{ __('Cá nhân') }}</a>
                        <a href="{{ route('user.edit') }}">{{ __('Thông tin') }}</a>
                        <a href="{{ route('user.logout') }}">{{ __('Đăng xuất') }}</a>
                    </div>
                    </a>
                </div>
                @endif
            </div>
        </div>
        <div id="flash-messages-box" class="flash-messages-box">
            <div class="flash-notice">
                <div class="container">
                    <div id="flash-notice" class="flash"></div>
                    <div class="close">&#215;</div>
                </div>
            </div>
            <div class="flash-alert">
                <div class="container">
                    <div id="flash-alert" class="flash flash-alert"></div>
                    <div class="close">&#215;</div>
                </div>
            </div>
        </div>
    </nav>
    <div class="container">
        @yield('content')
    </div>
    <div class="header-menu-modal" style="display:none"></div>
    <footer class="footer" style=" margin-top: 15px;">
        <div class="container">
            <div class="text-container">
                <div class="column question-icon">
                    <div class="title red">Gamekafe là gì?
                    </div>
                    <h2 class="text">
                        <p>
                            Bạn có biết {{ env('APP_NAME', 'Gamekafe') }} đang cung cấp các game và câu đố trực tuyến từ năm 2006?<br>
                            Đã hơn 15 năm thú vị của Gamekafe! Cảm ơn bạn đã là một phần của cộng đồng Y8!<br>
                            Gamekafe là một đơn vị phát hành và phát triển game. Nền tảng của Y8 là mạng xã hội với 30 triệu người chơi và đang không ngừng phát triển. Trang web cũng có <a href="https://vi.Gamekafe/anim">videos to watch</a>
                            như hoạt hình, video trò chơi, và hướng dẫn trò chơi. Danh mục giải trí phát triển hàng ngày <a href="https://vi.Gamekafe/new/games">new games</a>
                            được phát hành từng giờ. Vì Gamekafe có một lịch sử lâu dài, chúng tôi đã ghi lại các hiện tượng xã hội trên các trình duyệt game. Nội dung này là một phương tiện nghệ thuật quan trọng và có thể có thể lý giải cái gì người ta thích trong những giai đoạn khác nhau.
                        </p>
                    </h2>
                </div>
                <div class="column game-categories-icon">
                    <h3 class="title blue">Thể loại game
                    </h3>
                    <h4 class="text">
                        <p>
                            Trước đây, {{ env('APP_NAME', 'Gamekafe') }} nổi tiếng với các dòng game như arcade và games cổ điển khi <a href="https://vi.Gamekafe/tags/bubble_shooter">Bubble Shooter</a>
                            là game trình duyệt đình đám nhất. Ngày nay, có nhiều dòng game đã trở nên nổi tiếng. Đáng chú ý là, <a href="https://vi.Gamekafe/tags/2_players">2 player games</a>
                            đã trở thành game trình duyệt nổi tiếng cùng với <a href="https://vi.Gamekafe/tags/dress_up">dress up games</a>
                            . Một phần trò chơi quan trọng cuối cùng là <a href="https://vi.Gamekafe/tags/multiplayer">multiplayer games</a>
                            , {{ __('chơi danh mục mở rộng của game mạng xã hội hỗ trợ mạng') }}
                        </p>
                    </h4>
                </div>
                <div class="column technologies-icon">
                    <h3 class="title green">Công nghệ
                    </h3>
                    <h4 class="text">
                        <p>
                            Gamekafe.com là ngôi nhà cho mọi game thủ trên bất kỳ thiết bị nào. Chơi <a href="https://vi.Gamekafe/tags/touchscreen" rel="nofollow">phone games</a>
                            hoặc tải đồ họa 3D phong phú trên máy tính bằng cách chơi <a href="https://vi.Gamekafe/tags/webgl" rel="nofollow">WebGL Games</a>
                            . Mặt khác, nếu bạn chỉ thích chơi game 2D thông thường, thì <a href="https://vi.Gamekafe/tags/html5" rel="nofollow">HTML5 games</a>
                            sẽ phù hợp với bạn. Nếu bạn muốn nhớ lại những ngày xưa cũ, hãy truy cập kho lưu trữ <a href="https://vi.Gamekafe/tags/flash" rel="nofollow">Flash games</a>
                            để chơi các trò chơi chưa hề có ở những nơi khác. Cuối cùng, đừng quên đăng ký <a href="https://account.Gamekafe/" rel="nofollow">Y8 Account</a>
                            . Đây là mạng xã hội cộng đồng hỗ trợ người chơi.
                        </p>
                    </h4>
                </div>
            </div>
            <div class="bottom-section">
                <div class="logo-container">
                    <a class="no-event" aria-label="logo" href="{{ route('home') }}">
                        <img width="67" height="30" alt="Gamekafe" src="{{ asset('images/black-logo-no-background.png') }}" />
                    </a>
                    <span>© 2023 {{ env('APP_NAME', 'Gamekafe') }}</span>
                    <span>Đã đăng ký bản quyền.</span>
                </div>
                <div class="menu-games">
                    <div class="title">{{ env('APP_NAME', 'Gamekafe') }}
                    </div>
                    <ul>
                        <li>
                            <a title="{{ env('APP_NAME', 'Gamekafe') }} -  {{ __('Các trò chơi Trực tuyến Miễn phí tại') }} {{ env('APP_NAME', 'Gamekafe') }}" href="{{ route('new-games') }}">{{ __('Game mới') }}</a>
                        </li>
                        <li>
                            <a rel="nofollow" title="{{ env('APP_NAME', 'Gamekafe') }} -  {{ __('Các trò chơi Trực tuyến Miễn phí tại') }} {{ env('APP_NAME', 'Gamekafe') }}" href="{{ route('best-games') }}">{{ __('Phổ biến nhất') }}</a>
                        </li>
                    </ul>
                </div>
                <div class="menu-updates">
                    <div class="title">{{ __('Cập nhật') }}
                    </div>
                </div>

                <div class="follow-us">
                    <div class="title">{{ __('Theo dõi chúng tôi') }}
                    </div>
                </div>
                <div class="footer-image">
                    <img src="{{ asset('assets/footer_image1-422cedcbdbcd68bb2fbf253eafac355ee154ba97da9ad3c587d2e2052b8d7821.webp') }}" alt="footer image" class="lazy" />
                </div>
            </div>
        </div>
    </footer>
    <div class="dark-overlay"></div>
    <div class="policy-validation" id="policy-validation" style="display: none;">
        <div class="logo">
            <img width="59" height="27" alt="Gamekafe" src="{{ asset('images/color-logo-no-background.png') }}" />
        </div>
        <div class="content">
            {{ __('Chúng tôi sử dụng cookie để đề xuất nội dung và phân tích lưu lượng truy cập và quảng cáo. Khi sử dụng trang web này, bạn đồng ý với') }} <a target="_blank" rel="nofollow" href="{{ route('privacy') }}">{{ __('Chính sách bảo mật') }}</a>
            {{ __('và') }} <a target="_blank" rel="nofollow" href="{{ route('cookie-policy') }}">{{ __('Chính sách Cookie') }}</a>
        </div>
        <div class="actions" onclick="storeAccepted('accepted')">
            <span class="validate-policy">{{ __('Đã hiểu') }}</span>
        </div>
    </div>

    <script src="{{asset('backend/plugins/jquery/jquery.min.js')}}"></script>
    <script src="{{asset('backend/plugins/jquery-ui/jquery-ui.min.js')}}"></script>
    <script src="{{ asset('js/page/main.js') }}"></script>
    @yield('js')
</body>

</html>
