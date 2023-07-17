@extends('layouts.page')

@section('title')
<title>{{ env('APP_NAME', 'Gamekafe') }} - {{ __('Danh sách thẻ') }}</title>
@endsection

@section('content')
<div class="items-grid">
    <div class="box no-background">
        <div class="row">
            <div class="col-md-12">
                <h1 class="header-6">{{ __('TẤT CẢ CÁC THỂ LOẠI GAME MIỄN PHÍ.') }}<br> {{ __('CHỌN BẤT KỲ MỘT TỪ KHÓA NÀO VÀ CHƠI NGAY!') }}</h1>
                <h2 class="text-regular">{{ __('Bạn đang tìm kiếm một thể loại trò chơi nhất định? Kiểm tra danh sách mở rộng các loại trò chơi tại Y8 Games. Chúng tôi đã gắn nhãn các trò chơi bằng cách sử dụng các tag và danh mục trong hơn một thập kỷ qua. Trang này liệt kê hàng trăm tag khác nhau đại diện cho toàn bộ các bộ sưu tập trò chơi có thể chơi trên trình duyệt.') }}</h2>
                <h3 class="header-7">{{ __('Tất cả') }} {{ count($listTag) }} {{ __('thẻ gắn để tìm game miễn phí về giấc mơ của bạn') }}</h3>
            </div>
        </div>

        <div class="items-container" id="items_container">
            <div class="col-md-12">
                <ul class="tag">
                    @foreach($listTag as $tag => $item)
                    <li>
                        <a class="tag" title="{{ __('Game Trực Tuyến Miễn Phí Hàng đầu được Gắn Thẻ') }} {{ $tag }} - {{ env('APP_URL', 'Gamekafe') }}" href="{{ route('tags', ['tag' => $tag]) }}">
                            <h4><i id="{{ $tag }}" class="tag-36x28 tag-36x28-games tag-36x28-{{ $item['numberIcon'] }}"></i>{{ $tag }}<span style="font-size:13px;">{{ $item['count'] }}</span></h4>
                        </a>
                    </li>
                    @endforeach
                </ul>
            </div>
        </div>
    </div>
</div>
@endsection
