FROM nginx:alpine
COPY dist/mycircular /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80

RUN echo "for f in \$(find /usr/share/nginx/html -name 'main*.js'); do \
          envsubst '\$API_URL' < \$f > main.tmp ; \
          mv main.tmp \$f ; done && \
          if [[ \$PORT ]]; then \
             sed -i 's,80,'\$PORT',g' '/etc/nginx/nginx.conf' ; fi && \
          nginx -g 'daemon off;'" > run.sh

ENTRYPOINT ["sh", "run.sh"]
