from django.conf.urls import patterns, include, url
from django.contrib import admin

admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'retire.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    #pages
    url(r'^admin/', include(admin.site.urls)),
    url(r'^$', 'retire_app.views.landing', name='landing'),
    url(r'^search/$', 'retire_app.views.search', name='search'),

)
