function YoutubeVids() {
  return (
    <div class='carousel w-90 rounded-md'>
      <div id='slide1' class='carousel-item relative w-full'>
        <iframe
          width='640'
          height='250'
          src='https://www.youtube.com/embed/8qZgRHgguXk'
          title='YouTube video player'
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowfullscreen></iframe>
        <div class='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
          <a href='#slide4' class='btn btn-circle'>
            ❮
          </a>
          <a href='#slide2' class='btn btn-circle'>
            ❯
          </a>
        </div>
      </div>
      <div id='slide2' class='carousel-item relative w-full'>
        <iframe
          width='640'
          height='250'
          src='https://www.youtube.com/embed/Fqfja0vj76s'
          title='YouTube video player'
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowfullscreen></iframe>

        <div class='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
          <a href='#slide1' class='btn btn-circle'>
            ❮
          </a>
          <a href='#slide3' class='btn btn-circle'>
            ❯
          </a>
        </div>
      </div>
      <div id='slide3' class='carousel-item relative w-full'>
        <iframe
          width='640'
          height='250'
          src='https://www.youtube.com/embed/fHI8X4OXluQ'
          title='YouTube video player'
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowfullscreen></iframe>

        <div class='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
          <a href='#slide2' class='btn btn-circle'>
            ❮
          </a>
          <a href='#slide4' class='btn btn-circle'>
            ❯
          </a>
        </div>
      </div>
      <div id='slide4' class='carousel-item relative w-full'>
        <iframe
          width='640'
          height='250'
          src='https://www.youtube.com/embed/jfKfPfyJRdk'
          title='YouTube video player'
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowfullscreen></iframe>
        <div class='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
          <a href='#slide3' class='btn btn-circle'>
            ❮
          </a>
          <a href='#slide1' class='btn btn-circle'>
            ❯
          </a>
        </div>
      </div>
    </div>
  );
}

export default YoutubeVids;
