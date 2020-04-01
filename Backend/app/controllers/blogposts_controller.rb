class BlogpostsController < ApplicationController
    def index
        @blogposts = Blogpost.all 

        render json: @blogposts 
    end

    def show
        @blogpost = Blogpost.find(params[:id])

        render json: @blogpost
    end

    def create
        @new_blogpost = Blogpost.create(blogpost_params)

        render json: @new_blogpost
    end

    def destroy
        @blogpost_to_destroy = Blogpost.find(params[:id])

        @blogpost_to_destroy.destroy
    end

    def update
        @blogpost_to_update = Blogpost.find(params[:id])

        @blogpost_to_update.update(blogpost_params)
    end

    private

    def blogpost_params
        params.permit(:title, :content)
    end
end
