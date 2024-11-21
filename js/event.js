canvas.addEventListener ( 'click', function (e) {
    switch (state.current) {
        case state.getReady:
            state.current = state.game;
            break;
        case state.game:
            bird.flap();
            break;
        case state.over:
            pipes.reset();
            bird.speedReset();
            score.reset();
            state.current = state.getReady;
            break;
    }
});


