(function(module) {
  var articleView = {};

  articleView.handleProjectFilter = function() {
    $('#project-filter').on('change', function() {
      if ($(this).val()) {
        $('article').hide();
        $('article[data-project="' + $(this).val() + '"]').fadeIn();
      } else {
        $('article').fadeIn();
        $('article.template').hide();
      }
      $('#category-filter').val('');
    });
  };

  articleView.handleCategoryFilter = function() {
    $('#category-filter').on('change', function() {
      if ($(this).val()) {
        $('article').hide();
        $('article[data-category="' + $(this).val() + '"]').fadeIn();
      } else {
        $('article').fadeIn();
        $('article.template').hide();
      }
      $('#author-filter').val('');
    });
  };

  articleView.setTeasers = function() {
    $('h2').prev('p').remove();
    $('h2').next('p').remove();
    $('.article-body *:nth-of-type(n+2)').hide();
    $('article').on('click', 'a.read-on', function(event) {
      event.preventDefault();
      if($(this).text() === 'Read on →') {
        $(this).parent().find('*').fadeIn();
        $(this).html('Show Less &larr;');
      } else {
        $('body').animate({
          scrollTop: ($(this).parent().offset().top)
        },200);
        $(this).html('Read on &rarr;');
        $(this).parent().find('.article-body *:nth-of-type(n+2)').hide();
      }
    });
  };

  articleView.renderIndexPage = function() {
    $('#ajax-spinner').fadeOut();
    $('#filters').fadeIn();
    Article.allArticles.forEach(function(article){
      $('#articles').append(article.toHtml('#article-template'));
      if($('#category-filter option:contains("'+ article.category + '")').length === 0) {
        $('#category-filter').append(article.toHtml('#category-filter-template'));
      };
      if($('#project-filter option:contains("'+ article.project + '")').length === 0) {
        $('#project-filter').append(article.toHtml('#project-filter-template'));
      };
    });

    articleView.handleCategoryFilter();
    articleView.handleProjectFilter();
    articleView.setTeasers();
  };
  Article.fetchAll(articleView.renderIndexPage);
  module.articleView = articleView;
})(window);
