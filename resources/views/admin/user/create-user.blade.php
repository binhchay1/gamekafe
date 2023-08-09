@extends('layouts.admin')

@section('title')
<title>{{ env('APP_NAME', 'Gamekafe') }} - User</title>
@endsection

@section('js_sort_users')
<link rel="stylesheet" href="{{ asset('css/user.css') }}" />
@endsection
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
@vite('resources/js/user.js')
@section('main_content')
<div class="card-header mt-4">
    <h3>Create User</h3>
</div>
<div class=" container ">
    <form action="{{route('user.store')}}" method="POST" class="row g-3" enctype="multipart/form-data">
        @csrf
        <div class="col-md-6">
            <label for="inputAddress" class="form-label">Name</label>
            <input name="name" value="{{old('name')}}" type="text" class="form-control @error('name') is-invalid @enderror" placeholder="">
            @error('name')
            <span class="invalid-feedback" style="font-size: 100%;" role="alert">
                <strong>{{ $message }}</strong>
            </span>
            @enderror
        </div>
        <div class="col-md-3">
            <div class="form-group">
                <label for="img">Image</label>
                <input value="image" type="file" class=" form-control @error('image') is-invalid @enderror border-0 bg-light pl-0" name="image" id="image" hidden>
                <div class=" choose-avatar">
                    <div id="btnimage">
                        <img id="showImage" style="width: 150px" class="show-avatar" src="{{ url('/images/user.jpg')}}" alt="avatar">
                    </div>
                    <div id="button">
                        <i id="btn_chooseImg" class="fa fa-camera"></i>
                    </div>
                </div>
                @error('image')
                <span class="invalid-feedback" style="font-size: 100%;" role="alert">
                    <strong>{{ $message }}</strong>
                </span>
                @enderror
            </div>
        </div>
        <div class="col-md-6">
            <label for="inputAddress" class="form-label">Email</label>
            <input name="email" type="email" value="{{old('email')}}" class="form-control @error('email') is-invalid @enderror" placeholder="">
            @error('email')
            <span class="invalid-feedback" style="font-size: 100%;" role="alert">
                <strong>{{ $message }}</strong>
            </span>
            @enderror
        </div>
        <div class="col-md-6">
            <label for="inputAddress" class="form-label">Phone Number</label>
            <input name="phone" value="{{old('phone')}}" type="text" class="form-control @error('phone') is-invalid @enderror" placeholder="">
            @error('phone')
            <span class="invalid-feedback" style="font-size: 100%;" role="alert">
                <strong>{{ $message }}</strong>
            </span>
            @enderror
        </div>

        <div class="col-md-6">
            <label for="inputCity" class="form-label">Address</label>
            <input name="address" type="text" value="{{old('address')}}" class="form-control @error('address') is-invalid @enderror" id="inputCity">
            @error('address')
            <span class="invalid-feedback" style="font-size: 100%;" role="alert">
                <strong>{{ $message }}</strong>
            </span>
            @enderror
        </div>
        <div class="col-md-6">
            <label for="inputCity" class="form-label">Age</label>
            <input name="age" type="date" value="{{old('age')}}" class="form-control @error('age') is-invalid @enderror" id="inputCity">
            @error('age')
            <span class="invalid-feedback" style="font-size: 100%;" role="alert">
                <strong>{{ $message }}</strong>
            </span>
            @enderror
        </div>
        <div class="col-md-4">
            <label for="inputCity" class="form-label">Gender</label>
            <label for="status">{{__('Giới tính')}}</label>
            <select class="form-select" aria-label="Default select example" name="sex" id="">
                @foreach($gender as $gender => $value)
                <option selected id="status" value="{{$value}}">{{$gender}}</option>
                @endforeach
            </select>
        </div>
        <div class="col-12">
            <button type="submit" class="btn btn-success">Create</button>
        </div>
    </form>
</div>
@endsection
